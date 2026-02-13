const rateLimits = new Map<string, number[]>()
const MAX_REQUESTS = 3
const TIME_WINDOW = 60 * 1000

function isRateLimited(key: string): boolean {
  const now = Date.now()
  const timestamps = rateLimits.get(key) || []

  const recent = timestamps.filter(time => now - time < TIME_WINDOW)

  if (recent.length >= MAX_REQUESTS) {
    return true
  }

  recent.push(now)
  rateLimits.set(key, recent)
  return false
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email } = body

    if (!name || !email) {
      return Response.json(
        { ok: false, error: 'Name and email are required' },
        { status: 400 },
      )
    }

    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    const rateLimitKey = `${ip}:${email}`

    if (isRateLimited(rateLimitKey)) {
      return Response.json(
        { ok: false, error: 'Too many requests' },
        { status: 429 },
      )
    }

    return Response.json({ ok: true }, { status: 200 })
  }
  catch (error) {
    console.error('Subscription error:', error)
    return Response.json(
      { ok: false, error: 'Server error' },
      { status: 500 },
    )
  }
}
