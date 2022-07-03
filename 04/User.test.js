import User from './User';

describe('User', () => {
    it('should had set email and password when create instance', () => {
        const email = 'koder@devmentor.pl';
        const password = 'pw123456';
        const user = new User({ email, password });

        expect(user.getEmail()).toBe(email);
        expect(user.getPassword()).toBe(password);
    });

    it('should throw exception when email is incorrect', () => {
        function createWrongUserData() {
            new User({ email: 'devmentor.pl', password: 'pw123456' });
        }

        expect(createWrongUserData).toThrow();
    });

    it('should throw exception when password is incorrect', () => {
        function createWrongUserData() {
            new User({ email: 'koder@devmentor.pl', password: '123' });
        }

        expect(createWrongUserData).toThrow();
    });

    describe('.login()', () => {
        it('should return true when email contain domain devmentor.pl', () => {
            const email = 'koder@devmentor.pl';
            const password = 'pw123456';
            const user = new User({ email, password });

            expect(user.login()).toBe(true);
        });

        it('should return false when email not contain domain  devmentor.pl', () => {
            const email = 'koder@gmail.com';
            const password = 'pw123456';
            const user = new User({ email, password });

            expect(user.login()).toBe(false);
        });
    });
});