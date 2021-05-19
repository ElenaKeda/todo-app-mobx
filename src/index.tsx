import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

class AppState {
  @observable timer = 0;

  constructor() {
    setInterval(() => {
      this.timer += 1;
    }, 1000);
  }

  resetTimer() {
    this.timer = 0;
  }
}

const Timer = observer(() => {
  const service = React.useMemo(() => new AppState(), []);

  return (
    <div>
      <button onClick={() => service.resetTimer()}>
        Seconds passed: {service.timer}
      </button>
    </div>
  );
});

ReactDOM.render(<Timer />, document.getElementById('root'));
