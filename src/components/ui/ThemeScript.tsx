/**
 * Inline theme initialization script to avoid Flash of Unstyled Content (FOUC).
 * Respects system preference (prefers-color-scheme) by default, while supporting
 * manual user override saved in localStorage.
 */
export function ThemeScript() {
  const code = `
    (function() {
      try {
        var storedTheme = localStorage.getItem('techmode-theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
          document.documentElement.classList.add('dark');
          document.documentElement.setAttribute('data-theme', 'dark');
        } else if (storedTheme === 'light') {
          document.documentElement.classList.remove('dark');
          document.documentElement.setAttribute('data-theme', 'light');
        } else {
          // System default
          if (prefersDark) {
            document.documentElement.classList.add('dark');
            document.documentElement.setAttribute('data-theme', 'dark');
          } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.setAttribute('data-theme', 'light');
          }
        }
      } catch (e) {}
    })();
  `;

  return (
    <script
      id="techmode-theme-script"
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}
