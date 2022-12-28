describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterEach(function() 
  {
    // teardown logic
    while (document.querySelector("#servers").firstChild)
    {
      serverId--;
      document.querySelector("#servers").removeChild(document.querySelector("#servers").lastChild);
    }
  });
});

it ('should check the amount of servers', function () 
{
  let count = document.querySelector("#servers").childElementCount;
  expect(count).toEqual(serverId);
}
)