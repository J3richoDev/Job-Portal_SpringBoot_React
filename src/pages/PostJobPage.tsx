import { Divider } from '@mantine/core';
import PostJob from '../components/PostJob/PostJob';

const PostJobPage = () => {
  return (
    <div className="min-h-[100vh] bg-dark-950 font-['poppins']">
        <Divider size='xs' mx='md'/>
        <PostJob/>
    </div>
  )
}

export default PostJobPage