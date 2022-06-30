import React from 'react';
import dayjs from 'dayjs';
import Card from '../Card/Card';
import './Task.sass';
import Icon from '../Icon/Icon';

const humanizeTaskDueDate = (dueDate: Date | '') => (dueDate ? dayjs(dueDate).format('D MMMM') : '');

function Task(): React.ReactElement {
  return (
    <Card type="task">
      <div className="card__theme">Разработка</div>
      <div className="card__desc">Некое описание задачи можно добавить чуть больше</div>
      <div className="card__info-wrapper">
        <div className="card__status card__status--important">
          <Icon type="flag" />
        </div>
        <div className="card__deadline">{humanizeTaskDueDate(new Date())}</div>
      </div>
      <div className="card__tags tags">
        <span className="tag">Важное</span>
        <span className="tag">Горит</span>
      </div>
    </Card>
  );
}

export default Task;
