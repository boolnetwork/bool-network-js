import { CreateApi } from '../index';

describe('metadata', () => {
    it('check full types', async () => {
        // If some type not found, it will throw error.
        let warn = jest.spyOn(global.console, 'warn');
        let api = await CreateApi();
        console.log(await api.isReady);
        expect(warn).not.toHaveBeenCalled();
        // Cleanup
        warn.mockReset();
        warn.mockRestore();
    });
});
