import { onCLS, onLCP, onINP, onTTFB } from 'web-vitals';

export function reportWebVitals(callback = console.log) {
    if (typeof callback === 'function') {
        onCLS(callback);
        onLCP(callback);
        onINP(callback);
        onTTFB(callback);
    }
}