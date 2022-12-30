
export function fetchLogin(isAuthenticated = true) {
    return new Promise<{ data: boolean }>((resolve) =>
      setTimeout(() => resolve({ data: isAuthenticated }), 500)
    );
}
  