import { useParams } from 'react-router-dom'

import { Feed, Head } from 'Components'

export const UserProfile = () => {
  const { user } = useParams()

  return (
    <section>
      <h1>{user}</h1>
      {user &&
        <>
          <Head title={user} />
          <Feed user={user} />
        </>
      }
    </section>
  )
}
