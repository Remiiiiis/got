import {PassThrough} from 'stream';

declare module 'slow-stream' {
	export = PassThrough;
}
