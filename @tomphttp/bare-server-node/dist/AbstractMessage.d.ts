/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import { BareHeaders } from './requestUtil';
import { Headers } from 'fetch-headers';
import http from 'node:http';
import Stream from 'node:stream';
export interface RequestInit {
    method: string;
    path: string;
    headers: Headers | BareHeaders;
}
/**
 * Abstraction for the data read from IncomingMessage
 */
export declare class Request {
    body: Stream;
    method: string;
    headers: Headers;
    url: URL;
    constructor(body: Stream, init: RequestInit);
    get query(): import("url").URLSearchParams;
}
export declare type ResponseBody = Buffer | Stream;
export interface ResponseInit {
    headers?: Headers | BareHeaders;
    status?: number;
    statusText?: string;
}
export declare class Response {
    body?: ResponseBody;
    status: number;
    statusText?: string;
    headers: Headers;
    constructor(body: ResponseBody | undefined, init?: ResponseInit);
}
export declare function writeResponse(response: Response, res: http.ServerResponse): boolean;
