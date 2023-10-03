export default {
    "status": {callback: (body)=>{
        return {...body, result: {is_running: body.result.is_running, installation_id: body.result.installation_id}};
    }},
    "get": {params: ["uri"], callback: (body)=>{
        const streaming_url = (process.env.STREAMING_URL || "http://localhost:5280/stream/{sd_hash}")
            .replace('{claim_name}', body.result.claim_name)
            .replace('{claim_id}', body.result.claim_id)
            .replace('{sd_hash}', body.result.sd_hash);
        return {...body, result: { streaming_url }};
    }},
    "resolve": {params: ["urls"]},
    //"routing_table_get": {}, // disabled
    "version": {},

    "claim_search": {params: [
        "name", "text", "claim_id", "claim_ids", "txid",
        "nout", "channel", "channel_ids", "not_channel_ids", "has_channel_signature",
        "valid_channel_signature", "invalid_channel_signature", "limit_claims_per_channel", "is_controlling", "public_key_id",
        "height", "timestamp", "creation_height", "creation_timestamp", "activation_height",
        "expiration_height", "release_time", "amount", "support_amount", "effective_amount",
        "trending_score", "reposted_claim_id", "reposted", "claim_type", "stream_types",
        "media_types", "fee_currency", "fee_amount", "duration", "any_tags",
        "all_tags", "not_tags", "any_languages", "all_languages", "not_languages",
        "any_locations", "all_locations", "not_locations", "page", "page_size",
        "order_by", "no_totals", "remove_duplicates", "has_source", "sd_hash",
        "has_no_source"
    ]}
}