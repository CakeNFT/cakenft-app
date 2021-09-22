export default interface NFTMetatdata {
    image: string,
    name: string,
    external_url: string,
    description: string,
    attributes: { trait_type: string, value: string }[],
}