describe('Registration', () => {
    beforeEach(() => {
        cy.visit('https://dev.profteam.su/registration');
    });

    it('Негативный сценарий регистрации с невалидными данными', () => {
        cy.get('input[data-v-eaa6138e][autocomplete="username"]').type('user');
        cy.get('input[data-v-eaa6138e][autocomplete="email"]').type('invalid_email');
        cy.get('input[data-v-eaa6138e][autocomplete="new-password"]').first().type('password');
        cy.get('input[data-v-eaa6138e][autocomplete="new-password"]').last().type('invalid_password');

        cy.get('.registration-form__button button[type="submit"]:not([disabled])').click({ force: true });

        cy.get('div[data-v-a144256a]').should('exist');
        cy.get('div[data-v-a144256a]').contains('Обязательное поле, некорректная почта').should('exist');
        cy.get('div[data-v-a144256a]').contains('Обязательное поле, мин 6 символов, должен содержать буквы в верхнем и нижнем регистре, минимум 1 цифру, не содержать пробелы').should('exist');
        cy.get('div[data-v-a144256a]').contains('Пароли не совпадают').should('exist');
    });

    it('Позитивный сценарий регистрации', () => {
        cy.get('input[data-v-eaa6138e][autocomplete="username"]').type('testuser');
        cy.get('input[data-v-eaa6138e][autocomplete="email"]').type('test@example.com');
        cy.get('input[data-v-eaa6138e][autocomplete="new-password"]').first().type('TestPassword123');
        cy.get('input[data-v-eaa6138e][autocomplete="new-password"]').last().type('TestPassword123');

        cy.get('button[data-v-db1dcd8a]').first().click({ force: true });


        cy.get('div[data-v-a144256a]').should('not.exist');
    });
});

