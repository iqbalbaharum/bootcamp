export class Endorsement {
    constructor({ contractId, walletToUse }) {
      this.contractId = contractId;
      this.wallet = walletToUse;    
    }
    
    async nft_token() {
        return await this.wallet.viewMethod({ contractId: this.contractId, method: 'nft_token' });
    }

    async nft_metadata() {
        return await this.wallet.viewMethod({ contractId: this.contractId, method: 'nft_metadata' });
    }

    async nft_mint(tokenId, Metadata, receiverId) {
        return await this.wallet.callMethod({ contractId: this.contractId, method: 'nft_mint', args: { token_id: tokenId, metadata: Metadata, receiver_id: receiverId } });
    }
}