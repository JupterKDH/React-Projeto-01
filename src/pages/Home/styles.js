import styled from "styled-components";

export const Container = styled.div`
  >header{
   text-align: center;

   margin-top: 5rem;
   margin-bottom: 7.2rem;
   padding: 1rem ;

   border: 0.2rem solid ${({theme}) => theme.COLORS.BLACK};

   >img{
    width: 60rem;
    height: 45rem;

    border: 0.2rem solid ${({theme}) => theme.COLORS.BLACK};
   }
  }

  >main{
    text-align: center;
    margin-bottom: 7.2rem;

    h1{
      font-weight: 400;
      font-size: 4.9rem;
      line-height: 5.6rem;

      margin-bottom: 3.2rem;
    }

    h1 span{
      font-weight: 700;
    }

    span{
      color: ${({theme}) => theme.COLORS.SPAN};
    }

    p{
      color: ${({theme}) => theme.COLORS.GRAY};
      font-size: 1.4rem;
      line-height: 2.8rem;
    }
  }

  >footer{

    width: 56.8rem;

    margin: 0 auto 3.3rem;
    padding-top: 1rem;

    font-size: 1.4rem;
    line-height: 2.8rem;

    text-align: center;

    border-top: 0.1rem solid ${({theme}) => theme.COLORS.LINE};

    a{
      color: ${({theme}) => theme.COLORS.SPAN};
    }
    a + a{
      margin-left: 2.8rem;
    }

  }

  #balls{
    position: fixed;
    right: 0;
    bottom: 0;
  }

`;