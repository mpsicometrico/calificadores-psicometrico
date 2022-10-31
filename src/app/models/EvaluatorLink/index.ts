import { Link } from '../Link';
import { SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

export interface EvaluatorLink extends Link {
  src: string;
  img: string;
  sanitizedSrc: SafeResourceUrl;
}
