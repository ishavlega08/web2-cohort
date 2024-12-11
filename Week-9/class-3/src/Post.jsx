const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20, marginTop: 20 }

export function PostComponent({name, subTitle, time, image, description}) {
    return <div style={style}>
      <div style={{display: "flex"}}>
        <img src={image} style={{
          width: 30,
          height: 30,
          borderRadius: 20
        }} />
        <div style={{fontSize: 10, marginLeft: 10}}>
          <b>
            {name}
          </b>
          <div>{subTitle}</div>
          {time ? <div style={{display: "flex"}}>
            <div>{time}</div>
            <img src="https://w7.pngwing.com/pngs/971/269/png-transparent-clock-computer-icons-clock-cdr-text-time-thumbnail.png" style={{width: 10, height: 10, marginLeft: 4}} />
          </div> : null}
        </div>
      </div>
      <div style={{fontSize: 15}}>
        {description}
      </div>
    </div>  
}