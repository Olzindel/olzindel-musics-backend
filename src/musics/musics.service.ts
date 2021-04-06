import { Injectable } from '@nestjs/common';
import { MusicEntity } from './music.entity';

@Injectable()
export class MusicsService {
  getMusics = () => {
    const music: MusicEntity = {
      id: 'a',
      title: 'a',
      description: 'A music',
      linkToFile:
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    };

    const musicList = new Array<MusicEntity>();

    for (const id of ['id1', 'id2', 'id3', 'id4', 'id5', 'id6']) {
      musicList.push({ ...music, ...{ id, title: `A music - ${id}` } });
    }

    // console.debug(musicList);
    return musicList;
  };
}
