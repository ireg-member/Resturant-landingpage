import { useState } from 'react'
import { site } from '../data/site'
import { emailRule, passwordRule } from '../lib/authValidation'
import { Link } from '../lib/router'
import { useAuthForm } from '../lib/useAuthForm'
import AuthLayout from './AuthLayout'
import AuthSubmit from './AuthSubmit'
import AuthSuccess from './AuthSuccess'
import Button from './Button'
import CheckField from './CheckField'
import Field from './Field'
import Icon from './Icon'

const initialValues = { email: '', password: '', remember: false }

const rules = { email: emailRule, password: passwordRule }

export default function Login() {
  const { values, errors, status, fieldValue, handleSubmit, restart } = useAuthForm({
    initialValues,
    rules,
    namespace: 'login',
  })
  const [resetSent, setResetSent] = useState(false)

  return (
    <AuthLayout
      eyebrow="Welcome back"
      title="Sign in to your account"
      description="Pick up where you left off — bookings, saved preferences and your usual table."
      footer={
        <p className="text-sm text-ink-muted">
          New to {site.name}?{' '}
          <Link
            to="/signup"
            className="font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition hover:decoration-accent"
          >
            Create an account
          </Link>
        </p>
      }
    >
      {status === 'done' ? (
        <AuthSuccess
          title="You’re signed in"
          body={
            values.email
              ? `Welcome back. We've pulled your saved preferences for ${values.email} and your next table is ready to book.`
              : 'Welcome back. Your saved preferences and next table are ready.'
          }
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button as={Link} to="/" className="sm:w-auto">
              Back to the restaurant
              <Icon name="arrowRight" className="h-4 w-4" />
            </Button>
            <Button type="button" variant="outline" onClick={restart} className="sm:w-auto">
              Use a different account
            </Button>
          </div>
        </AuthSuccess>
      ) : (
        <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Field
            id="login-email"
            name="email"
            type="email"
            label="Email address"
            icon="mail"
            placeholder="you@example.com"
            autoComplete="email"
            value={values.email}
            error={errors.email}
            onChange={fieldValue('email')}
          />

          <Field
            id="login-password"
            name="password"
            type="password"
            label="Password"
            icon="lock"
            placeholder="Your password"
            autoComplete="current-password"
            value={values.password}
            error={errors.password}
            onChange={fieldValue('password')}
          />

          <div className="flex flex-wrap items-center justify-between gap-3">
            <CheckField
              id="login-remember"
              checked={values.remember}
              onChange={fieldValue('remember')}
            >
              Keep me signed in
            </CheckField>

            <button
              type="button"
              onClick={() => setResetSent(true)}
              className="text-sm font-semibold text-ink-soft underline decoration-line-strong underline-offset-4 transition hover:text-accent hover:decoration-accent"
            >
              Forgot password?
            </button>
          </div>

          {resetSent && (
            <p
              role="status"
              className="flex items-start gap-2.5 rounded-2xl bg-accent-soft px-4 py-3 text-xs leading-relaxed font-medium text-ink-soft"
            >
              <Icon name="mail" className="mt-px h-3.5 w-3.5 shrink-0 text-accent" />
              If an account exists for that email, a reset link is on its way. The link
              expires in 30 minutes.
            </p>
          )}

          <AuthSubmit loading={status === 'loading'}>
            {status === 'loading' ? 'Signing you in…' : 'Sign in'}
          </AuthSubmit>

          <p className="text-center text-xs leading-relaxed text-ink-faint">
            By signing in you agree to our terms of service and privacy policy.
          </p>
        </form>
      )}
    </AuthLayout>
  )
}