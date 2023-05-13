import { toChildArray } from 'preact';
import type { ComponentChildren } from 'preact';
import './carousel.scss';

interface Props {
  id: number;
  children: ComponentChildren;
}

const Carousel = (props: Props) => {
  const { id } = props;
  const firstItem = `carousel_${id}_1`;
  const secondItem = `carousel_${id}_2`;
  const count = toChildArray(props.children).length;
  return (
    <div>
      I have {count} children {props.children}
    </div>
  );

  return (
    <div class="carousel">
      <a class="carousel__button carousel__next-button" href="#/" type="button">
        Next
      </a>
      <section class="carousel__item" id={firstItem}>
        <slot name="mobile" />
      </section>
      <section class="carousel__item" id={secondItem}>
        <slot name="tablet" />
      </section>
      <a
        class="carousel__button carousel__prev-button"
        href={`#${firstItem}`}
        type="button"
      >
        Prev
      </a>
    </div>
  );
};

export default Carousel;
