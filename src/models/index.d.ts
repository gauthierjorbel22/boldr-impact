import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BOLDRMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class BOLDR {
  readonly id: string;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BOLDR, BOLDRMetaData>);
  static copyOf(source: BOLDR, mutator: (draft: MutableModel<BOLDR, BOLDRMetaData>) => MutableModel<BOLDR, BOLDRMetaData> | void): BOLDR;
}