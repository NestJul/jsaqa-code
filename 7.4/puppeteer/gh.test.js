let page;

beforeEach(async () => {
    page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  }, 30000);

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub · Build and ship software on a single, collaborative platform · GitHub');
  }, 30000) // timeout of 30s (default is 5s)


  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 15000);

    test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-mktg.btn-large-mktg.btn-muted-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Sign up for free")
  }, 10000);
});
 
 test("The test CustStories'", async () => {
  await page.goto("https://github.com/customer-stories?type=team");
 const title = await page.title();
 expect(title).toEqual('Customer stories · GitHub');
 }, 30000) // timeout of 30s (default is 5s)

test("BTN Start a free trial", async () => {
  await page.goto("https://github.com/customer-stories?type=team");
  const btnSelector = ".btn-mktg.ml-lg-2.mt-2.mt-lg-0.d-block.d-lg-inline-block.btn-muted-mktg";
  await page.waitForSelector(btnSelector, {
    visible: true,
  });
  const actual = await page.$eval(btnSelector, link => link.textContent);
  expect(actual).toContain("Start a free trial")
}, 20000);

 test("The test CustStories'", async () => {

 await page.goto("https://github.com/customer-stories/accenture");

  const title = await page.title();
 expect(title).toEqual('Accenture · GitHub');
 }, 35000) // timeout of 35s (default is 5s)


