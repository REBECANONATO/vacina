import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 500px;
  background: #1567E2;

  dd { width: 35%; margin: 0 auto; padding-top: 20px; margin-bottom: 20px; color: #FFF;
    display: flex; justify-content: center; align-items: center;

    svg { margin-right: 20px; }
  }
`;

export const Content = styled.div`
  max-width: 780px;
  width: 100%;
  margin: 20px auto;
`;

export const BoxDeficiencias = styled.section`
  max-width: 780px;
  width: 100%;
  margin: 0 auto;

  p { text-transform: uppercase; color: #FFF; font-size: 1.5em; }
  span { text-transform: uppercase; color: #FFF; font-weight: bold; font-size: 2.3em; letter-spacing: -2px; }

  article {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 20px;
    transition: all .3s ease-in-out;

    &:hover{
      background: #0f56bf;
      padding: 20px;
      border-radius: 7px;
    }

    .titulo-deficiencias {
      background: transparent;
      width: 30%;
      line-height: 40px;
      display: block;
    }

    div {
      width: 151px;
      height: 100px;

      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      background: #FFF;
      border-radius: 7px;
      margin-top: 20px;
      margin-left: 20px;

      label { color: #1567E2; font-weight: bold; }
      input { width: 90%; height: 30px; color: #1567E2; border: 1px solid #f0f0f5; border-radius: 3px; padding: 0 5px;
        ::-webkit-input-placeholder { color: #BABABA; }
       }
    }

  }
`;

