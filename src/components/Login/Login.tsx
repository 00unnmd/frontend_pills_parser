import { useLoginService } from "./service.ts";

// TODO use login component
const LoginPage = () => {
  const service = useLoginService();

  return (
    <form onSubmit={service.handleSubmit}>
      <input
        name="email"
        type="email"
        value={service.username}
        onChange={service.setUsername}
      />
      <input
        name="password"
        type="password"
        value={service.password}
        onChange={service.setPassword}
      />
    </form>
  );
};

export default LoginPage;
