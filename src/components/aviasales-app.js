import classes from './aviasales-app.module.scss'

function AviasalesApp() {
  console.log(classes)
  return (
    <div className={classes['aviasales-app']}>
      <h1>AviasalesApp</h1>
    </div>
  )
}

export default AviasalesApp
