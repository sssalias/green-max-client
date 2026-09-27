import styles from './login-form.module.css';
import { UiBadge, UiButton, UiInput } from '@/shared/ui';
import { type SubmitEventHandler, useState } from 'react';
import { type LoginFormSchema, loginUser } from '@/features/login/model';
import { useNavigate } from 'react-router-dom';

export function LoginForm() {
  const [formState, setFormState] = useState<LoginFormSchema>({
    idInstance: '',
    apiTokenInstance: '',
  });

  const [formError, setFormError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    try {
      loginUser(formState);
      navigate('/chat');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setFormError(error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <h4 className={styles.loginHeading}>Авторизация</h4>
      <fieldset className={styles.loginFieldset}>
        {formError ? (
          <UiBadge animated className={styles.loginError} variant="danger">
            {formError}
          </UiBadge>
        ) : null}
        <UiInput
          label="Id Instance"
          onChange={(e) => setFormState({ ...formState, idInstance: e.target.value })}
          type="text"
        />
        <UiInput
          label="Api Token Instance"
          onChange={(e) => setFormState({ ...formState, apiTokenInstance: e.target.value })}
          type="password"
        />
        <UiButton type="submit">Войти</UiButton>
      </fieldset>
    </form>
  );
}
