import React from 'react'
import { BsClipboard2, BsClipboard2Check } from 'react-icons/bs'

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
      onClick={() => copyOnClick(content)}
      css={{
        cursor: "pointer"
      }}
    >
      <div className='h-4'>
        <div className='absolute' css={{
          strokeDashoffset: copied ? -50 : 0,
          transition: "all 300ms ease-in-out"
        }}>
          <BsClipboard2 size={20}/>
        </div>
        <div className={copied ? "visible" : "hidden"} css={{
          strokeDashoffset: copied ? 0 : -50,
          transition: "all 300ms ease-in-out"
        }}>
          <BsClipboard2Check size={20} color='green' />
        </div>
      </div>
    </button>
  )
}

export default CopyButton