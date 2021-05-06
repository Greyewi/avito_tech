

const BucketList = ({bucketList}) => {

    return(
        <div className="bucket">
          {objectToArr(bucketList).map((item, key) => <div key={key}>
             name - {item.name} <br/>
             count - {item.count}
             <hr/>
          </div>)}
        </div>
    )
}

const objectToArr = (object) => Object.keys(object).map((key) => ({name: key, count: object[key]}))

export default BucketList