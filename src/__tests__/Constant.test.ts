import { CreateApi } from '../index';

describe('Constant', () => {
    it('check full types', async () => {
        let api = await CreateApi();
        let prs = await api.consts.dex.pricePrecision;
        expect(prs.eq(100000));
    });
});
