declare module 'textmagic-rest-client' {
    interface SendMessageParams {
        text: string;
        phones: string;
    }

    class TextMagicClient {
        constructor(username: string, apiKey: string);
        Messages: {
            send(params: SendMessageParams, callback: (err: any, res: any) => void): void;
        };
    }

    export default TextMagicClient;
}
