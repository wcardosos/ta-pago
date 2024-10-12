import { UniqueId } from './unique-id';

export abstract class Entity<Props> {
  private readonly _id: UniqueId;
  protected props: Props;

  get id() {
    return this._id;
  }

  protected constructor(props: Props, id?: UniqueId) {
    this.props = props;
    this._id = id ?? new UniqueId();
  }

  public map(): Props {
    return this.props;
  }
}
