import CSSStyleDeclarationPropertyManager from '../../css/declaration/property-manager/CSSStyleDeclarationPropertyManager.js';
import ICachedResult from './ICachedResult.js';

export default interface ICachedStyleResult extends ICachedResult {
	result: WeakRef<CSSStyleDeclarationPropertyManager> | null;
}
