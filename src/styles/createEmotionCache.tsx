import createCache from &apos;@emotion/cache&apos;;

export default function createEmotionCache() {
    return createCache({ key: &apos;css&apos;, prepend: true });
}
