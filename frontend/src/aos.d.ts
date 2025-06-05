declare module 'aos' {
  interface AosOptions {
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    offset?: number;
    delay?: number;
    // Ajoutez d'autres options si nécessaire
  }
  
  function init(options?: AosOptions): void;
  function refresh(): void;
  function refreshHard(): void;
  
  export default {
    init,
    refresh,
    refreshHard
  };
}