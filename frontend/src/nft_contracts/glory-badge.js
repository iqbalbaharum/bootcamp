export class GloryBadge {
    constructor({ contractId, walletToUse }) {
      this.contractId = contractId;
      this.wallet = walletToUse;    
    }
    
    async nft_token(tokenId) {
        return await this.wallet.viewMethod({ contractId: this.contractId, method: 'nft_token' , args:{ token_id : tokenId}});
    }

    async nft_metadata() {
        return await this.wallet.viewMethod({ contractId: this.contractId, method: 'nft_metadata' });
    }

    async nft_mint(Metadata, receiverId) {
        return await this.wallet.callMethod({ contractId: this.contractId, method: 'nft_mint', args: { metadata: Metadata, receiver_id: receiverId } });
    }

    async bulk_nft_mint(Metadata, list) {
        return await this.wallet.callMethod({ contractId: this.contractId, method: 'bulk_nft_mint', args: { metadata: Metadata, list: list } });
    }
}