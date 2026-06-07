import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PremiumButton, StatusBadge } from '../components/primitives'
import { buildRequestAccessRoute, openMailtoDraft } from '../data/contactConfig'

export default function Login() {
  const [pin, setPin] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const nav = useNavigate()

  function submit(event: React.FormEvent) {
    event.preventDefault()

    if (pin.trim() === '1234') {
      setMessage(null)
      nav('/os')
      return
    }

    setMessage('Preview PIN for this public build is 1234. Manual access requests are handled separately.')
  }

  return (
    <div className="conversion-shell conversion-shell-compact">
      <div className="hero-orb left-[-12rem] top-[2rem] h-72 w-72 bg-cyan-300/12" />
      <div className="hero-orb right-[-8rem] top-[8rem] h-72 w-72 bg-amber-200/10" />

      <div className="container-shell conversion-page conversion-page-compact">
        <div className="conversion-topbar">
          <button type="button" className="public-link-button" onClick={() => nav('/')}>
            Return to public homepage
          </button>
          <button
            type="button"
            className="public-link-button"
            onClick={() =>
              nav(
                buildRequestAccessRoute({
                  track: 'private-os',
                  reason: 'Private OS review',
                  next: 'Request private OS preview'
                })
              )
            }
          >
            Request access instead
          </button>
        </div>

        <div className="conversion-login-layout">
          <section className="conversion-panel conversion-panel-compact">
            <p className="public-kicker">Private OS Preview</p>
            <h1 className="conversion-title conversion-title-compact">A preview gate for the Executive Command OS.</h1>
            <p className="conversion-intro">
              This screen is a lightweight preview entry point for the current build. It does not provision accounts
              or imply secure private access.
            </p>

            <div className="conversion-badge-row">
              <StatusBadge variant="neutral">Preview shell</StatusBadge>
              <StatusBadge variant="success">Manual review remains separate</StatusBadge>
            </div>

            <form className="conversion-form" onSubmit={submit}>
              <label className="conversion-field">
                <span className="conversion-label">Demo preview PIN</span>
                <input
                  value={pin}
                  onChange={(event) => setPin(event.target.value)}
                  className="input-shell conversion-pin-input"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  placeholder="Enter preview PIN"
                  aria-describedby="login-preview-note"
                />
              </label>

              <p id="login-preview-note" className="conversion-help">
                For this public preview build, use demo PIN <strong>1234</strong> to view the shell only.
              </p>

              <div className="conversion-actions">
                <PremiumButton type="submit" variant="accent" size="lg">
                  Enter Preview Shell
                </PremiumButton>
                <PremiumButton
                  type="button"
                  variant="secondary"
                  size="lg"
                  onClick={() =>
                    nav(
                      buildRequestAccessRoute({
                        track: 'login',
                        reason: 'Manual review request',
                        next: 'Request access conversation'
                      })
                    )
                  }
                >
                  Request Access
                </PremiumButton>
              </div>

              <div className="conversion-actions conversion-actions-secondary">
                <PremiumButton
                  type="button"
                  variant="ghost"
                  onClick={() =>
                    openMailtoDraft({
                      subject: 'Jonathan Blackburn OS contact request',
                      bodyLines: [
                        'Name:',
                        'Organisation / context:',
                        'What would you like to discuss?'
                      ]
                    })
                  }
                >
                  Email Jonathan
                </PremiumButton>
              </div>

              {message ? (
                <p className="conversion-status" role="status" aria-live="polite">
                  {message}
                </p>
              ) : null}
            </form>
          </section>

          <aside className="conversion-aside conversion-aside-compact">
            <div className="conversion-card">
              <p className="conversion-card-title">What this route is</p>
              <p className="public-copy-sm">
                A preview gateway into the current private shell, useful for orientation and safe module review.
              </p>
            </div>

            <div className="conversion-card">
              <p className="conversion-card-title">What this route is not</p>
              <p className="public-copy-sm">
                It is not a secure account system, a real access provisioner, or a publishing route for private
                materials.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
