class RedirectManager {
  static saveCurrentPath(): boolean {
    try {
      sessionStorage.setItem('redirect', window.location.href);
      return true;
    } catch (error) {
      console.error('Failed to save redirect path:', error);
      return false;
    }
  }

  static restoreOriginalPath(): boolean {
    try {
      const redirect = sessionStorage.getItem('redirect');
      if (!redirect) return false;

      sessionStorage.removeItem('redirect');
      const path = new URL(redirect).pathname;
      window.history.replaceState(null, '', path);
      return true;
    } catch (error) {
      console.error('Failed to restore path:', error);
      return false;
    }
  }
}

export default RedirectManager;
