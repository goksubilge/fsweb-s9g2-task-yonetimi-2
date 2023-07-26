import React from "react";
import { differenceInDays, formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const diffInDays = differenceInDays(new Date(taskObj.deadline), new Date());
  const distanceToNow = formatDistanceToNow(new Date(taskObj.deadline), {
    locale: tr,
  });
  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim:{" "}
        <span>
          {taskObj.deadline} / {diffInDays} / {distanceToNow}
        </span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
