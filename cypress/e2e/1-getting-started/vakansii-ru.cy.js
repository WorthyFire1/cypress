describe('Вакансии с заполением всех обязательных полей', () => {
    it('Позитивный сценарий: Создание вакансии с корректными данными', () => {
        // Посещаем страницу входа
        cy.visit('https://dev.profteam.su/login');

        // Вводим логин
        cy.get('input[data-v-eaa6138e][placeholder="Латинские символы"]').eq(0).type('testerEmployer');

        // Вводим пароль
        cy.get('input[data-v-eaa6138e][autocomplete="current-password"]').type('Password1');

        // Нажимаем на кнопку входа
        cy.get('.login-form__button button[type="submit"]').click();

        // Нажимаем на кнопку "Вакансии" в меню
        cy.get('p[data-v-224efc30]').contains('Вакансии').click();

        // Проверяем, что произошел переход на страницу с вакансиями после нажатия на "Вакансии"
        cy.url().should('eq', 'https://dev.profteam.su/account/vacancies');

        // Нажимаем на кнопку "Создать вакансию"
        cy.get('button[data-v-db1dcd8a]').contains('Создать вакансию').click();

        // Заполняем все обязательные поля корректными данными
        cy.get('input[data-v-eaa6138e][placeholder="Кладовщик"]').eq(0).type('Клоун', {force: true});
        cy.get('.radio-component__label').contains('По договорённости').click({force: true});

        // Кликаем на элемент "Тип занятости", чтобы открыть выпадающий список
        cy.get('.form-select__selected').contains('Очный').click({force: true});

        // Выбираем тип занятости "Совмещенный" из выпадающего списка
        cy.get('.form-select__option').contains('Совмещенный').click({force: true});

        // Выбираем график работы "2/2"
        cy.get('.radio-component__label').contains('2/2').click({force: true});

        // Заполняем поле "Ваши требования"
        cy.get('textarea[data-v-1121bbd9]').eq(1).type('Пока', {force: true});

        // Заполняем поле "Обязанности сотрудника"
        cy.get('textarea[data-v-1121bbd9]').eq(2).type('Борода', {force: true});

        // Нажимаем на кнопку "Создать вакансию"
        cy.get('.buttons button[data-v-db1dcd8a]').contains('Создать вакансию').click({force: true});

    });

    it('Негативный сценарий: Попытка создания вакансии с некорректными данными', () => {
        // Посещаем страницу входа
        cy.visit('https://dev.profteam.su/login');

        // Вводим логин
        cy.get('input[data-v-eaa6138e][placeholder="Латинские символы"]').eq(0).type('testerEmployer');

        // Вводим пароль
        cy.get('input[data-v-eaa6138e][autocomplete="current-password"]').type('Password1');

        // Нажимаем на кнопку входа
        cy.get('.login-form__button button[type="submit"]').click();

        // Нажимаем на кнопку "Вакансии" в меню
        cy.get('p[data-v-224efc30]').contains('Вакансии').click();

        // Проверяем, что произошел переход на страницу с вакансиями после нажатия на "Вакансии"
        cy.url().should('eq', 'https://dev.profteam.su/account/vacancies');

        // Нажимаем на кнопку "Создать вакансию"
        cy.get('button[data-v-db1dcd8a]').contains('Создать вакансию').click({force: true});

        // Нажимаем на кнопку "Создать вакансию" без заполнения обязательных полей
        cy.get('.buttons button[data-v-db1dcd8a]').contains('Создать вакансию').click({force: true});

    });

    it('Негативный сценарий: Попытка создания вакансии с длинными данными', () => {
        // Посещаем страницу входа
        cy.visit('https://dev.profteam.su/login');

        // Вводим логин
        cy.get('input[data-v-eaa6138e][placeholder="Латинские символы"]').eq(0).type('testerEmployer');

        // Вводим пароль
        cy.get('input[data-v-eaa6138e][autocomplete="current-password"]').type('Password1');

        // Нажимаем на кнопку входа
        cy.get('.login-form__button button[type="submit"]').click();

        // Нажимаем на кнопку "Вакансии" в меню
        cy.get('p[data-v-224efc30]').contains('Вакансии').click();

        // Проверяем, что произошел переход на страницу с вакансиями после нажатия на "Вакансии"
        cy.url().should('eq', 'https://dev.profteam.su/account/vacancies');

        // Нажимаем на кнопку "Создать вакансию"
        cy.get('button[data-v-db1dcd8a]').contains('Создать вакансию').click({force: true});

        cy.get('input[data-v-eaa6138e][placeholder="Кладовщик"]').eq(0).type('Клоун', { force: true });
        cy.get('.radio-component__label').contains('По договорённости').click({ force: true });
        cy.get('.form-select__selected').contains('Очный').click({ force: true });
        cy.get('.form-select__option').contains('Совмещенный').click({ force: true });
        cy.get('.radio-component__label').contains('2/2').click({ force: true });

        // Генерируем текст длиной больше 1000 символов
        const longText = 'a'.repeat(1001);

        cy.get('textarea[data-v-1121bbd9]').eq(1).type(longText, {force:true});

        // Вводим сгенерированный текст в поле "Обязанности сотрудника"
        cy.get('textarea[data-v-1121bbd9]').eq(2).type(longText, { force: true });

        // Нажимаем на кнопку "Создать вакансию"
        cy.get('.buttons button[data-v-db1dcd8a]').contains('Создать вакансию').click({ force: true });


    });
});

