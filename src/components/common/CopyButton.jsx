import React from 'react'
import { BsClipboard2, BsCheck2  } from 'react-icons/bs'

const CopyButton = ({ content }) => {

  const copyOnClick = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  }

  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <button
      type='button'
      onClick={() => copyOnClick(content)}
    >
      <div className='h-4'>
        <div className={copied ? "hidden" : "visible"} css={{
          transition: "all 400ms ease-in-out"
        }}>
          <BsClipboard2 size={18}/>
        </div>
        <div className={copied ? "visible" : "hidden"} css={{
          transition: "all 400ms ease-in-out"
        }}>
          <BsCheck2 className='border border-primary rounded-md' size={18} color='green' />
        </div>
      </div>
    </button>
  )
}

export default CopyButton