import { Devvit } from '@devvit/public-api';

// Adds a new menu item to the subreddit allowing to create a new cybersecurity challenge
Devvit.addMenuItem({
  label: 'Create New CyberQuest Challenge',
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    const post = await reddit.submitPost({
      title: 'Reddit Cybersecurity Challenge',
      subredditName: subreddit.name,
      // The preview appears while the post loads
      preview: (
        <vstack height="100%" width="100%" alignment="middle center">
          <text size="large">Loading CyberQuest Challenge...</text>
        </vstack>
      ),
    });
    ui.showToast({ text: 'Created cybersecurity challenge!' });
    ui.navigateTo(post);
  },
});