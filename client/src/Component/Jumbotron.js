import React, { Component } from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
container{
  width:100%;

}
  .jumbo {
  position: relative;
  width: 100%;
  height: 100px;
  position: absolute;
  background-color: #34495e;
  margin-bottom:100px;
 
}

.content {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 160px;
  overflow:hidden;
  font-family: 'Lato', sans-serif;
  font-size: 35px;
  line-height: 40px;
  color: #ecf0f1;
  &__container {
  font-weight: 600px;
  overflow: hidden;
  height: 40px;
  padding: 0 40px;
  

  &:before {
      content: '[';
      left: 0;
    }

    &:after {
    content: ']';
    position: absolute;
     margin-bottom: 100px;
      right: 0;
    }

    &:after, &:before {
      position: absolute;
      top: 0;
      
      color: #16a085;
      font-size: 42px;
      line-height: 40px;
      margin-bottom:100px;
      -webkit-animation-name: opacity;
      -webkit-animation-duration: 2s;
      -webkit-animation-iteration-count: infinite;
      animation-name: opacity;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }

    &__text {
      display: inline;
      float: left;
     margin-bottom:50px;
    }

    &__list {
     margin-bottom:50px;
      padding-left: 110px;
      text-align: left;
      list-style: none;
      
      -webkit-animation-name: change;
      -webkit-animation-duration: 10s;
      -webkit-animation-iteration-count: infinite;
      animation-name: change;
      animation-duration: 10s;
      animation-iteration-count: infinite;

      &__item {
        line-height:40px;
    
        
      }
    }
  }
}

@-webkit-keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@-webkit-keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

@-o-keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@-o-keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

@-moz-keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@-moz-keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

@keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

6 is the number of animation.
Here, there are 4 lines :

1 to 2
2 to 3
3 to 4
4 to 3
3 to 2
2 to 1

6x + 6y = 100 (100% duration)

// HERE : 
y = 4 -> Animation between two lines
x = 12.66 -> Time spent on a line

// You can define a value and calculate the other if you want change speed or the number of lines
  
}
// Extra small devices (portrait phones, less than 576px)
// No media query since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { 
  
  .content {
  position: absolute;
  top: 100%;
  left: 50%;
  
  transform: translate(-50%, -50%);
  height: 130px;
  overflow:hidden;
   
  font-family: 'Lato', sans-serif;
  font-size: 25px;
  line-height: 40px;
  color: #ecf0f1;
   
 
}
.jumbo{
  
  height: 100px;
  position: absolute;
  background-color: #34495e;

  }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }







@media (max-width: 480px) { 


}

`;

export class Jumbotron extends Component {
  render() {
    return (
      <Styles>
        <Jumbo fluid className="jumbo">
          <div className="overlay" />
          <Container>
            <div className="content">
              <div className="content__container">
                <p className="content__container__text">Hello</p>

                <ul className="content__container__list">
                  <li className="content__container__list__item">Student!</li>
                  <li className="content__container__list__item">Mentors!</li>
                  <li className="content__container__list__item">Admins!</li>
                  <li className="content__container__list__item">
                    Welcome to CYF!
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </Jumbo>
      </Styles>
    );
  }
}

export default Jumbotron;
