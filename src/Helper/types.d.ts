export type billType = {
  id: string;
  description: string;
  category: string;
  amount: string;
  date: string;
  isHighlight: boolean;
};

export type addBillActionPayload = {
  id?: string;
  desc: string;
  date: string;
  amount: string;
  category: string;
};

export type BillProps = {
  id: string;
  description: string;
  category: string;
  amount: string;
  date: string;
  isHighlight: boolean;
  onOpen: () => void;
  setId: (state: string) => void;
};
