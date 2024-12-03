import Choice from './components/Choice';
import img1 from  './images/f3.png';
import img2 from  './images/f4.png';
import img3 from  './images/f5.png';
import './App.css';

function App() {
  return (
    <main>
      <div class="container">
        <div class="choice">
          <div class="question">
            <h2>Что вам необходимо?</h2>
          </div>
          <div class="choices">
            <Choice image={img1} title={'Первый блок'}
                    text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'}/>
            <Choice image={img2} title={'Второй блок'}
                    text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'}/>
            <Choice image={img3} title={'Третий блок'}
                    text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'}/>
          </div>
        </div>
      </div>
    </main>
);
}

export default App;
