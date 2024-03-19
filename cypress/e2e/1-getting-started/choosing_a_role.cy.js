describe('Модуль Личный кабинет', () => {
    beforeEach(() => {
        // Авторизация на сайте
        cy.visit('https://dev.profteam.su/login');
        cy.get('input[data-v-eaa6138e][autocomplete="username"]').type('testerStudent');
        cy.get('input[data-v-eaa6138e][autocomplete="current-password"]').type('Password1');
        cy.get('.login-form__button button[type="submit"]').click();
        cy.wait(2000); // Ждем некоторое время для загрузки страницы
    });

    it('Просмотр уведомлений', () => {
        // Переход в раздел "Уведомления"
        cy.contains('Уведомления').click();

        // Убедиться, что отображается список уведомлений
        cy.get('.notifications-list').should('exist');

    });

    it('Прочтение уведомлений пользователя', () => {
        // Переход в раздел "Уведомления"
        cy.contains('Уведомления').click();

        // Убедиться, что отображается кнопка "Прочитать все"
        cy.get('.link--size-small').should('exist');

        // Нажатие на кнопку "Прочитать все"
        cy.contains('Прочитать все').click();

        // Проверка того, что все уведомления отмечены как прочитанные
        cy.get('.notification-list-item--unread').should('not.exist');
    });
});
