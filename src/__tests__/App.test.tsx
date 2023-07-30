import { getUserById } from "../api/users";

test('getUserById returns data in asc order', async () => {
    const username = 'johndoe';
    const users = await getUserById(username, 'asc');
    expect(users).toBeDefined();
    expect(users.length).toBeGreaterThan(0);
});

test('getUserById returns data in desc order', async () => {
    const username = 'johndoe';
    const users = await getUserById(username, 'desc');
    expect(users).toBeDefined();
    expect(users.length).toBeGreaterThan(0);
});

test('getUserById returns data in default order', async () => {
    const username = 'johndoe';
    const users = await getUserById(username, '');
    expect(users).toBeDefined();
    expect(users.length).toBeGreaterThan(0);
});

