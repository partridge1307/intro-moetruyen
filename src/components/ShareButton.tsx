'use client';

import { hostURL } from '@/config';
import { useClipboard } from '@mantine/hooks';
import { Check, Copy, Facebook, Share2, TwitterIcon } from 'lucide-react';
import {
  FacebookShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
} from 'next-share';
import { FC } from 'react';
import { buttonVariants } from './ui/Button';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './ui/Dialog';
import { cn } from '@/lib/utils';

interface ShareButtonProps {
  title: string;
}

const ShareButton: FC<ShareButtonProps> = ({ title }) => {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Dialog>
      <DialogTrigger className={buttonVariants({ className: 'gap-2' })}>
        <Share2 className="w-5 h-5" /> Chỉa sẻ
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Chia sẻ</DialogTitle>

        <div className="flex flex-wrap justify-between gap-3">
          <FacebookShareButton
            url={hostURL}
            quote={title}
            hashtag="#Moetruyen"
            blankTarget
          >
            <Facebook className="w-8 h-8" />
          </FacebookShareButton>

          <TwitterShareButton
            url={hostURL}
            title={title}
            hashtags={['Moetruyen']}
            blankTarget
          >
            <TwitterIcon size={'2rem'} />
          </TwitterShareButton>

          <TelegramShareButton url={hostURL} title={title} blankTarget>
            <TelegramIcon size={'2rem'} round />
          </TelegramShareButton>

          <RedditShareButton url={hostURL} title={title} blankTarget>
            <RedditIcon size={'2rem'} round />
          </RedditShareButton>
        </div>

        <div className="flex items-center gap-2">
          <p className="flex-1 line-clamp-1 p-2 rounded-md bg-foreground text-white">
            {hostURL}
          </p>

          <button
            className={cn(buttonVariants(), 'shrink-0')}
            onClick={() => clipboard.copy(hostURL)}
          >
            {clipboard.copied ? (
              <Check className="w-6 h-6" />
            ) : (
              <Copy className="w-6 h-6" />
            )}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareButton;
