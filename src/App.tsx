import styled from "@emotion/styled";

function App() {
  const Style = styled.div`
    display: flex;
    height: 100vh;
  `;
  const SideMenu = styled.div`
    width: 20vw;
    max-width: 300px;
    background-color: #f0f0f0;
  `;
  const Content = styled.div`
    flex: 1;
  `;

  return (
    <Style>
      <SideMenu>
        <h1>Side Menu</h1>
      </SideMenu>
      <Content>
        <h1>Content</h1>
      </Content>
    </Style>
  );
}

export default App;
