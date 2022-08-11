
import FeedBackItem from './FeedBackItem'
import {motion, AnimatePresence} from 'framer-motion'


function FeedBackList({feedBack , handleDelete}) {
  

    if(!feedBack || feedBack.length === 0){
        return <p>No feedback</p>
    }
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        
        {feedBack.map((item)=>(
           <motion.div key={item.id} 
           initial={{opacity:0}}
           animate={{opacity:1}}
           exit={{opacity:0}}
           >
           <FeedBackItem key ={item.id} item= {item} handleDelete= {handleDelete}/> </motion.div>))}
       
      </AnimatePresence>
    </div>
  )
}

export default FeedBackList