import { site } from '../data/site'
import {
  confirmRule,
  emailRule,
  nameRule,
  passwordRule,
  passwordStrength,
} from '../lib/authValidation'
import { Link } from '../lib/router'
import { useAuthForm } from '../lib/useAuthForm'
import AuthLayout from './AuthLayout'
import AuthSubmit from './AuthSubmit'
import AuthSuccess from './AuthSuccess'
import Button from './Button'
import CheckField from './CheckField'
import Field from './Field'
import Icon from './Icon'

const initialValues = { name: '', email: '', password: '', confirm: '', terms: false }

const rules = {
  name: nameRule,
  email: emailRule,
  password: passwordRule,
  confirm: (value, values) => confirmRule(value, values.password),
  terms: (value) => (value ? '' : 'Please accept the terms to continue'),
}

const meterTones = ['bg-accent', 'bg-ember', 'bg-ember', 'bg-sage']

function StrengthMeter({ value }) {
  const { score, label } = passwordStrength(value)

  return (
    <div className="flex items-center gap-3" aria-live="polite">
      <span aria-hidden="true" className="flex flex-1 gap-1.5">
        {[0, 1, 2, 3].map((index) => (
          <span
            key={index}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
              index < score ? meterTones[score - 1] : 'bg-line'
            }`}
          />
        ))}
      </span>
      <span className="w-16 shrink-0 text-right text-xs font-semibold text-ink-faint">
        {label}
      </span>
    </div>
  )
}

export default function SignUp() {
  const { values, errors, status, fieldValue, handleSubmit, restart } = useAuthForm({
    initialValues,
    rules,
    namespace: 'signup',
    delay: 1100,
  })

  return (
    <AuthLayout
      eyebrow="Join us"
      title="Create your account"
      description={`One account for bookings, saved preferences and first pick of the wood oven at ${site.name}.`}
      footer={
        <p className="text-sm text-ink-muted">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition hover:decoration-accent"
          >
            Sign in
          </Link>
        </p>
      }
    >
      {status === 'done' ? (
        <AuthSuccess
          title="Check your inbox"
          body={
            values.email
              ? `We sent a confirmation link to ${values.email}. Open it to finish setting up your account — it expires in 24 hours.`
              : 'We sent you a confirmation link. Open it to finish setting up your account.'
          }
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button as={Link} to="/" className="sm:w-auto">
              Back to the restaurant
              <Icon name="arrowRight" className="h-4 w-4" />
            </Button>
            <Button type="button" variant="outline" onClick={restart} className="sm:w-auto">
              Use another email
            </Button>
          </div>
        </AuthSuccess>
      ) : (
        <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Field
            id="signup-name"
            name="name"
            label="Full name"
            icon="user"
            placeholder="Alex Rivera"
            autoComplete="name"
            value={values.name}
            error={errors.name}
            onChange={fieldValue('name')}
          />

          <Field
            id="signup-email"
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
            id="signup-password"
            name="password"
            type="password"
            label="Password"
            icon="lock"
            placeholder="At least 8 characters"
            autoComplete="new-password"
            value={values.password}
            error={errors.password}
            onChange={fieldValue('password')}
            footer={values.password ? <StrengthMeter value={values.password} /> : null}
          />

          <Field
            id="signup-confirm"
            name="confirm"
            type="password"
            label="Confirm password"
            icon="lock"
            placeholder="Type it once more"
            autoComplete="new-password"
            value={values.confirm}
            error={errors.confirm}
            onChange={fieldValue('confirm')}
          />

          <CheckField
            id="signup-terms"
            checked={values.terms}
            onChange={fieldValue('terms')}
            error={errors.terms}
          >
            I agree to the terms of service and privacy policy.
          </CheckField>

          <AuthSubmit loading={status === 'loading'}>
            {status === 'loading' ? 'Creating your account…' : 'Create account'}
          </AuthSubmit>

          <p className="text-center text-xs leading-relaxed text-ink-faint">
            We only use your email for bookings and the occasional menu note. No lists sold,
            ever.
          </p>
        </form>
      )}
    </AuthLayout>
  )
}